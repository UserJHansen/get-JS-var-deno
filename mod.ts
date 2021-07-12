function SeperateLines(input: string, split = "\n", trim = true): string[] {
    return trim ? input.split(split).map(x=>x.trim()) : input.split(split);
}  

export function FindVariable(target: string, script: string, split = "\n", trim = true) {
    var ScriptArray = SeperateLines(script, split, trim)
    var variableRegex = new RegExp(`${target}(?: *= *)(.+)(?=;?)`)

    var result = ""
    for (const lineNo in ScriptArray)
     result = variableRegex.exec(ScriptArray[lineNo])?.[1].replace(/;$/, "") || result;

    return result
}

export function FindVariableArray(target: string, script: string, split = "\n", trim = true) {
    var ScriptArray = SeperateLines(script, split, trim)
    var variableRegex = new RegExp(`${target}(?: *= *)(.+)(?=;?)`)

    var result = []
    for (const lineNo in ScriptArray)
        if (variableRegex.exec(ScriptArray[lineNo])?.[1].replace(/;$/, ""))
            result.push(variableRegex.exec(ScriptArray[lineNo])?.[1].replace(/;$/, ""))

    return result
}