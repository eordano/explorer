workspace(
    name = "dcl",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "rules_proto",
    sha256 = "4d421d51f9ecfe9bf96ab23b55c6f2b809cbaf0eea24952683e397decfbd0dd0",
    strip_prefix = "rules_proto-f6b8d89b90a7956f6782a4a3609b2f0eee3ce965",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_proto/archive/f6b8d89b90a7956f6782a4a3609b2f0eee3ce965.tar.gz",
        "https://github.com/bazelbuild/rules_proto/archive/f6b8d89b90a7956f6782a4a3609b2f0eee3ce965.tar.gz",
    ],
)

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "c97bf38546c220fa250ff2cc052c1a9eac977c662c1fc23eda797b0ce8e70a43",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/1.1.0/rules_nodejs-1.1.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories")

node_repositories(
    node_repositories = {
        "10.16.3-darwin_amd64": ("node-v10.16.3-darwin-x64.tar.gz", "node-v10.16.3-darwin-x64", "6febc571e1543c2845fa919c6d06b36a24e4e142c91aedbe28b6ff7d296119e4"),
        "10.16.3-linux_amd64": ("node-v10.16.3-linux-x64.tar.xz", "node-v10.16.3-linux-x64", ""),
        "10.16.3-windows_amd64": ("node-v10.16.3-win-x64.zip", "node-v10.16.3-win-x64", ""),
    },
    node_urls = ["https://nodejs.org/dist/v{version}/{filename}"],
    node_version = "10.16.3",
    package_json = ["//:package.json"],
    yarn_repositories = {
        "1.17.3": ("yarn-v1.17.3.tar.gz", "yarn-v1.17.3", "e3835194409f1b3afa1c62ca82f561f1c29d26580c9e220c36866317e043c6f3"),
    },
    yarn_urls = ["https://github.com/yarnpkg/yarn/releases/download/v{version}/{filename}"],
    yarn_version = "1.17.3",
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

http_archive(
    name = "rules_typescript_proto",
    sha256 = "7ebb1f6eb115c2b114019949b531383bca4cea6c0e245a661ca105ae2f6323b0",
    strip_prefix = "rules_typescript_proto-0.0.2",
    urls = [
	"https://github.com/Dig-Doug/rules_typescript_proto/archive/0.0.2.tar.gz",
    ],
)

load("@rules_typescript_proto//:index.bzl", "rules_typescript_proto_dependencies")

rules_typescript_proto_dependencies()

http_archive(
    name = "io_bazel_rules_webtesting",
    sha256 = "9bb461d5ef08e850025480bab185fd269242d4e533bca75bfb748001ceb343c3",
    urls = [
        "https://github.com/bazelbuild/rules_webtesting/releases/download/0.3.3/rules_webtesting.tar.gz",
    ],
)

load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

load("@io_bazel_rules_webtesting//web/versioned:browsers-0.3.1.bzl", "browser_repositories")

browser_repositories(chromium = True)
