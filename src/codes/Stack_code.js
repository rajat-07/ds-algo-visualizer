// push code
const stack_push_code_c = `
// Function to add an item to stack.  It increases top by 1 
void push(struct Stack* stack, int item) 
{ 
    if (isFull(stack)) 
        return; 
    stack->array[++stack->top] = item; 
    printf("%d pushed to stack\n", item); 
} 
`;
const stack_push_code_cpp = `
bool Stack::push(int x) 
{ 
    if (top >= (MAX - 1)) { 
        cout << "Stack Overflow"; 
        return false; 
    } 
    else { 
        a[++top] = x; 
        cout << x << " pushed into stack\n"; 
        return true; 
    } 
} 
`;
const stack_push_code_java = `
boolean push(int x) 
{ 
    if (top >= (MAX - 1)) { 
        System.out.println("Stack Overflow"); 
        return false; 
    } 
    else { 
        a[++top] = x; 
        System.out.println(x + " pushed into stack"); 
        return true; 
    } 
} 
`;
const stack_push_code_python = `
# Function to add an item to stack. It increases size by 1 
def push(stack, item): 
    stack.append(item) 
    print(item + " pushed to stack ") 
`;

// pop code
const stack_pop_code_c = `
// Function to remove an item from stack.  It decreases top by 1
int pop(struct Stack* stack) 
{ 
    if (isEmpty(stack)) 
        return INT_MIN; 
    return stack->array[stack->top--]; 
} 
`;
const stack_pop_code_cpp = `
int Stack::pop() 
{ 
    if (top < 0) { 
        cout << "Stack Underflow"; 
        return 0; 
    } 
    else { 
        int x = a[top--]; 
        return x; 
    } 
} 
`;
const stack_pop_code_java = `
int pop() 
{ 
    if (top < 0) { 
        System.out.println("Stack Underflow"); 
        return 0; 
    } 
    else { 
        int x = a[top--]; 
        return x; 
    } 
} 
`;
const stack_pop_code_python = `
# Function to remove an item from stack. It decreases size by 1 
def pop(stack): 
    if (isEmpty(stack)): 
        return str(-maxsize -1) # return minus infinite 
      
    return stack.pop() 
`;

// peek code
const stack_peek_code_c = `
// Function to return the top from stack without removing it 
int peek(struct Stack* stack) 
{ 
    if (isEmpty(stack)) 
        return INT_MIN; 
    return stack->array[stack->top]; 
} 
`;
const stack_peek_code_cpp = `
int Stack::peek() 
{ 
    if (top < 0) { 
        cout << "Stack is Empty"; 
        return 0; 
    } 
    else { 
        int x = a[top]; 
        return x; 
    } 
} 
`;
const stack_peek_code_java = `
int peek() 
{ 
    if (top < 0) { 
        System.out.println("Stack Underflow"); 
        return 0; 
    } 
    else { 
        int x = a[top]; 
        return x; 
    } 
} 
`;
const stack_peek_code_python = `
# Function to return the top from stack without removing it 
def peek(stack): 
    if (isEmpty(stack)): 
        return str(-maxsize -1) # return minus infinite 
    return stack[len(stack) - 1] 
`;

module.exports = {
  stack_push_code_c,
  stack_push_code_cpp,
  stack_push_code_java,
  stack_push_code_python,
  stack_pop_code_c,
  stack_pop_code_cpp,
  stack_pop_code_java,
  stack_pop_code_python,
  stack_peek_code_c,
  stack_peek_code_cpp,
  stack_peek_code_java,
  stack_peek_code_python
};
