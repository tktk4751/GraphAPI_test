/**
 * 全体の流れ
 * - データベースに挿入するデータの型を宣言する､スキーマを作成する
 * - リゾルバ関数を定義して､データを追加できるようにする｡
 *  - リゾルバ関数の種類
 *   - query : GETメソッドに相当｡データを取得する｡
 *   - Mutation : POSTメソッドに相当｡データを追加する｡Deleteもできる｡
 */

const { PrismaClient } = require("@prisma/client");
const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");
//prisma変数を使えるようにするためにインスタンス化
const prisma = new PrismaClient();

//Hacker Newsの投稿データを取得する

let links = [
  {
    id: "ここにIDを入力",
    description: "テスト投稿です",
    url: "www.google.com",
  },
];

//リゾルバ関数 スキーマで定義した型に基づいて､データを挿入できる関数
const resolvers = {
  Query: {
    info: () => "HackerNews",
    feed: (parent, args, context) => {
      return context.prisma.link.findMany();
    },
  },

  Mutation: {
    //postに情報を追加する関数
    post: (parent, args, context) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      });
      return newLink;

      //   //最初に投稿された記事数を取得する｡記事数を固有のIDとして使用するため｡
      //   let idCount = links.length;
      //   //毎回IDにプラス1をしていく｡それを記事IDとして設定する｡
      //   const link = {
      //     id: `link-${idCount++}`,
      //     description: args.description,
      //     url: args.url,
      //   };
      //   //プッシュメソッドを使い､新しく投稿を追加する｡
      //   links.push(link);
      //   return link;
    },
  },
};

//新規にサーバーを立ち上げるため､インスンタンス化をする｡
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => console.log(`${url}でサーバーを起動中`));
