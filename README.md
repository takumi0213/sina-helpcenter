# Sina-Help Center

Sina-chanのヘルプセンターです📜

## ✏️ 記事の作成について

リポジトリをクローンし、セットアップが完了している場合は次のコマンドで記事を作成できます。(これが一番簡単です👍)

```sh
$ jekyll post [article title is here]
```

GitHubのWebサイトなどから直接作成する際は、ファイル名を「西暦-日付-記事名.md」として作成してください。(例:`2022-01-01-happy-new-year.md`)
記事内の設定などは、[この記事](/_posts/2022-12-22-what-is-linkedrole.md)が参考になると思います。

### 記事内で使える記法について

| 使用可能ツール | 説明 | 表記方法 |
| - | - | - |
| picture | 画像を貼り付けできます。(assets/img/articleフォルダに画像ファイルを設置してください。) WebPに自動変換できます👏 | {% picture jpt-webp ファイル名 %} |
| twitter | Twitterのツイートや、プロフィールを埋め込むことができます。 | {% TwitterのツイートのURL %} |
| gist | Gistを埋め込めます。 | {% gist GistのID %} |

## 👨‍💻 ローカルで立ち上げる
```sh
# Ruby が入っていることを確認
$ ruby --version

# 必要なライブラリをインストール
$ bundle install

# ローカルサーバーを立ち上げる
$ bundle exec jekyll server
```