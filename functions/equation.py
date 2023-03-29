def set_negatives(input):
    for index_i, i in enumerate(input):
        if(type(i)==list): input[index_i] = set_negatives(input[index_i])
        elif i == '-':
            if(type(input[index_i+1])==list):
                input[index_i] = '+'
                input.insert(index_i+1, '*')
                input.insert(index_i+1, '-1')
            else:
                if input[index_i+1][0] == '-':
                    input[index_i] = '+'
                    input[index_i+1] = input[index_i+1][1:len(input[index_i+1])]
                else:
                    input[index_i] = '+'
                    input[index_i+1] = f'-{input[index_i+1]}'
    if input[0] == '+': input = input[1:len(input)]
    return input


def multiply_divide(operator, a, b):
    if type(a)!=list: a=[a] 
    if type(b)!=list: b=[b]
    output = []
    for index_i, i in enumerate(a):
        for index_j, j in enumerate(b):
            if(type(i)==list or type(j)==list):
                output = output + multiply_divide(operator, i, j)
            elif not(i in '+-*/' or j in '+-*/'):
                output.append(i)
                output.append(operator)
                output.append(j)
                output.append('+')
    return output[:-1]

def sum_substract(operator, a, b):
    pass

def simplify(input):
    input = set_negatives(input)
    while True:
        for index_i, i in enumerate(input):
            if type(i)==str and i in '*/':
                newN = multiply_divide(i, input[index_i-1], input[index_i+1])
                print(newN)
                del input[index_i-1]
                del input[index_i-1]
                del input[index_i-1]
                input = input[:index_i-2] + newN + input[index_i-1:len(input)]
        print(input)
        # for index_i, i in enumerate(input):
        #     if i in '+-':
        #         newN = sum_substract(index_i, input[index_i-1], input[index_i+1])
        #         del input[index_i-1]
        #         del input[index_i-1]
        #         del input[index_i-1]
        #         input = input[:index_i-2] + newN + input[index_i-1:len(input)]
print(simplify(['10', '*', [['10', '+', '5'], '*', ['10', '+', '5']]]))

# print(set_negatives(['-10', '+', '10', '-', '-10']))FUNSIONA
# print(multiply_divide('*', '10', ['10', '*', '10', '+', '10', '*', '5', '+', '5', '*', '10', '+', '5', '*', '5']))FUNSIONA
