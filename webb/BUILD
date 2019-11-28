package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

filegroup(
    name = "static",
    srcs = glob(
        include = [
            "static/**/*",
        ],
    ),
)

filegroup(
    name = "sources",
    srcs = glob(
        include = [
            "src/**/*.ts",
            "src/**/*.tsx",
        ],
    ),
)

ts_library(
    name = "webb_code",
    srcs = glob(
        include = [
            "src/**/*.ts",
            "src/**/*.tsx",
        ],
    ),
    deps = [
        "//kernel",
        "//protos:comms",
        "//protos:broker",
        "//utils",
        "//synced-ecs",
        "//gamekit",
        "//config",
        "//rpc",
        "//scene-api",
        # App Dependencies
        "@npm//@types/defaults",
        "@npm//@types/history",
        "@npm//@types/prop-types",
        "@npm//@types/react",
        "@npm//@types/react-dom",
        "@npm//@types/react-redux",
        "@npm//@types/react-router",
        "@npm//@types/stringify-object",
        "@npm//defaults",
        "@npm//history",
        "@npm//prop-types",
        "@npm//ethereum-cryptography",
        "@npm//fp-future",
        "@npm//react",
        "@npm//react-dom",
        "@npm//react-fast-compare",
        "@npm//react-inner-html",
        "@npm//react-redux",
        "@npm//react-router",
        "@npm//redux",
        "@npm//redux-saga",
        "@npm//stringify-object",
    ],
)

load("@npm_bazel_typescript//:index.bzl", "ts_devserver")
load("@npm_bazel_rollup//:index.bzl", "rollup_bundle")

rollup_bundle(
    name = "main_roll",
    config_file = ":rollup.config.js",
    entry_point = "src/main.tsx",
    format = "amd",
    output_dir = True,
    deps = [
        ":webb_code",
        "//config",
        "//gamekit",
        "//kernel",
        "//protos:broker_lib",
        "//protos:comms_lib",
        "//rpc",
        "//scene-api",
        "//synced-ecs",
        "//utils",
        "@npm//ethereum-cryptography",
        "@npm//jsonwebtoken",
        "@npm//rollup-plugin-commonjs",
        "@npm//rollup-plugin-json",
        "@npm//rollup-plugin-node-builtins",
        "@npm//rollup-plugin-node-globals",
        "@npm//rollup-plugin-node-resolve",
    ],
)

ts_devserver(
    name = "devserver",
    additional_root_paths = [
        ":static",
        ":main_roll__files",
    ],
    data = [
        ":main_roll",
        ":static",
        ":webb_code",
        "//:node_modules",
        "//gamekit:gamekit_bundle",
        "@npm//@babel/runtime",
        "@npm//hoist-non-react-statics",
        "@npm//prop-types",
        "@npm//react",
        "@npm//react-dom",
        "@npm//react-redux",
        "@npm//react-router-dom",
        "@npm//redux",
        "@npm//redux-saga",
    ],
    entry_module = "webb/main_roll/main_roll",
    port = 3000,
    serving_path = "/bundle.js",
    static_files = [
        "index.html",
        "static/index.css",
    ],
    deps = [
        "static/config.js",
        "//protos:broker",
        "//protos:comms",
        "@npm//auth0-js:auth0-js__umd",
        "@npm//events:events__umd",
        "@npm//fp-future:fp-future__umd",
        "@npm//google-protobuf:google-protobuf__umd",
        "@npm//history:history__umd",
        "@npm//path-to-regexp:path-to-regexp__umd",
        "@npm//react-fast-compare:react-fast-compare__umd",
        "@npm//react-inner-html:react-inner-html__umd",
        "@npm//react-is:react-is__umd",
        "@npm//typesafe-actions:typesafe-actions__umd",
        "@npm//uuid:uuid__umd",
    ],
)