# ChoiceQuestion

選択問題の出題と回答ができるアプリケーションです。

## 問題データについて

問題データは data.json に記述します。フォーマットは以下の通りです。

```
{
  "title": "タイトル",
  "questions" : [
    {
      "no": 1,
      "description": "説明１",
      "question": "問題文１",
      "answer": "正しい答え",
      "wrongs": [
        "間違い１",
        "間違い２",
        "間違い３"
      ]
    },
    {
      "no": 2,
      "description": "説明２",
      "question": "問題文２",
      "answer": "正しい答え",
      "wrongs": [
        "間違い１",
        "間違い２",
        "間違い３"
      ]
    }
  ]
}
```
