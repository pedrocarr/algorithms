

# potencia = 0


# while potencia <= 10:
#     breakpoint()
#     print(2 ** potencia)
#     potencia = potencia + 1

# def add_to_list(item, my_list=[]):
#   my_list.append(item)
#   return my_list

# print(add_to_list(1))
# print(add_to_list(2))

def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Function is being called")
        result = func(*args, **kwargs)
        print("Function execution completed")
        return result
    return wrapper

@my_decorator
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
