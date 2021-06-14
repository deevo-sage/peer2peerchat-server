import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import path from "path";
const typesarr = loadFilesSync(path.join(__dirname, "./types"), {
  extensions: ["gql"],
});
export const typeDefs = mergeTypeDefs(typesarr);
