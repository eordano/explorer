package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "scene-api",
    srcs = glob(
        include = [
            "ecs/*.ts",
            "engine/*.ts",
            "interface/*.ts",
            "lib/*.ts",
            "schema/*.ts",
            "index.ts",
        ],
        exclude = [
            "extract.ts",
            "init.ts",
        ],
    ),
    module_name = "@dcl/scene-api",
    deps = [
        "//rpc",
        "//utils",
        "@npm//@types/node",
        "@npm//devtools-protocol",
    ],
)
