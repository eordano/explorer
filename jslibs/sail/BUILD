package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")

filegroup(
    name = "sources",
    srcs = glob(
        include = [
            "*.ts",
            "*.tsx",
        ],
    ),
)

ts_library(
    name = "sail",
    srcs = glob(
        include = [
            "*.ts",
            "*.tsx",
        ],
    ),
    deps = [
        "@npm//@types/defaults",
        "@npm//@types/react",
        "@npm//defaults",
        "@npm//react",
    ],
)