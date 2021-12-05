const { ESLint } = require("eslint");
const test = require("tape");

test("load config in eslint to validate all rule syntax is correct", async (t) => {
  const eslint = new ESLint();
  const code = `import "side-effect";

import fs from "fs";
import path from "path";

import BarBar from "@bar/bar";
import BarFoo from "@bar/foo";
import Foo from "foo";
import * as React from "react";

import Hoge from "@/hoge";
import HogeHoge from "@/hoge/hoge";
import Parent from "../";
import Sibling from "./sibling";
import Child from "./child/child";

import type { MyType } from "@/types";
import type { ParentType } from "../parent";
import type { SiblingType } from "./siblingtype";
import type { ChildType } from "./child/childtype";

import "global.css";
import "global.less";
import "global.scss";
import "global.sass";
import "global.styl";
`;
  const [lintResult] = await eslint.lintText(code, {
    filePath: "code.ts",
  });
  t.equal(lintResult.errorCount, 0);
  t.end();
});
