def fibonacci_sequence(n):
    """Gera a sequência de Fibonacci até o número n."""
    fib_sequence = [0, 1]
    while True:
        next_fib = fib_sequence[-1] + fib_sequence[-2]
        if next_fib > n:
            break
        fib_sequence.append(next_fib)
    return fib_sequence

def check_fibonacci(num):
    """Verifica se o número pertence à sequência de Fibonacci."""
    if num < 0:
        return False
    fib_sequence = fibonacci_sequence(num)
    return num in fib_sequence

# Solicita ao usuário um número
try:
    number = int(input("Informe um número: "))
    if check_fibonacci(number):
        print(f"O número {number} pertence à sequência de Fibonacci.")
    else:
        print(f"O número {number} não pertence à sequência de Fibonacci.")
except ValueError:
    print("Por favor, insira um número inteiro válido.")