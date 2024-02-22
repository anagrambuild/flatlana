#!/bin/bash
flatc --rust --gen-mutable --reflect-names -o ./schemas-rust/src ./schemas/*.fbs
flatc --ts --gen-mutable --reflect-names -o ./schemas-ts ./schemas/*.fbs
pnpm --filter flatlana-types run build 