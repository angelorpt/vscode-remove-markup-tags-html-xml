import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.removeMarkupTags', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);
            const newText = removeMarkupTags(text);

            editor.edit(editBuilder => {
                editBuilder.replace(selection, newText);
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function removeMarkupTags(text: string) {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
}

export function deactivate() {}
