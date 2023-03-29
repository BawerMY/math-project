def tree(input):
    output = []
    input = input+'+'
    bracketCounter = 0
    lastAppend = -1
    for index_j, j in enumerate(input):
        if j=='(': bracketCounter+=1
        if j==')': bracketCounter-=1
        if j in '+-*/' and bracketCounter == 0:
            if input[lastAppend+1] == '(' and input[index_j-1] == ')': output.append(tree(input[lastAppend+2:index_j-1]))
            else: output.append(input[lastAppend+1:index_j])
            output.append(input[index_j])
            lastAppend = index_j
    return output[:-1]

def text(input):
    return str(input).replace(',', '').replace(' ', '').replace("'", '').replace('[', '(').replace(']', ')')[1:-1]
