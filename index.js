const core = require('@actions/core');
const slackifyMarkdown = require('slackify-markdown');

try {
    const input = core.getInput('text', { required: true });
    const jsonify = core.getBooleanInput('jsonify', { required: false });
    const mrkdwn = slackifyMarkdown(input);
    // trim start/end " from JSON string for backwards compatibility
    const output = jsonify ? JSON.stringify(mrkdwn).replace(/^"+|"+$/g, '') : mrkdwn;
    core.setOutput("text", output);
} catch (error) {
    core.setFailed(error.message);
}
