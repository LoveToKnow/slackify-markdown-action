# slackify-markdown-action
GitHub Action to convert markdown into Slack's mrkdwn. Basically just a wrapper of [jsarafajr/slackify-markdown](https://github.com/jsarafajr/slackify-markdown).

## Usage

### Inputs

* `text` - The markdown text to convert.
* `jsonify` - Whether to JSON format the output string. Useful if it is going
to be directly used as part of the
[slackapi/slack-github-action](https://github.com/marketplace/actions/slack-send)
payload. `true` by default.

### Outputs

* `text` - The markdown text converted to Slack's mrkdwn format.
