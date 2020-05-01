// push code
const bst_insert_code_c = `
// Function to add an item to stack.  It increases top by 1 
void push(struct Stack* stack, int item) 
{ 
    if (isFull(stack)) 
        return; 
    stack->array[++stack->top] = item; 
    printf("%d pushed to stack\n", item); 
} 
`;
const bst_insert_code_cpp = `
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
const bst_insert_code_java = `
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
const bst_insert_code_python = `
# Function to add an item to stack. It increases size by 1 
def push(stack, item): 
    stack.append(item) 
    print(item + " pushed to stack ") 
`;

// pop code
const bst_remove_code_c = `
// Function to remove an item from stack.  It decreases top by 1
int pop(struct Stack* stack) 
{ 
    if (isEmpty(stack)) 
        return INT_MIN; 
    return stack->array[stack->top--]; 
} 
`;
const bst_remove_code_cpp = `
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
const bst_remove_code_java = `
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
const bst_remove_code_python = `
# Function to remove an item from stack. It decreases size by 1 
def pop(stack): 
    if (isEmpty(stack)): 
        return str(-maxsize -1) # return minus infinite 
      
    return stack.pop() 
`;

// peek code
const bst_search_code_c = `
// Function to return the top from stack without removing it 
int peek(struct Stack* stack) 
{ 
    if (isEmpty(stack)) 
        return INT_MIN; 
    return stack->array[stack->top]; 
} 
`;
const bst_search_code_cpp = `
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
const bst_search_code_java = `
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
const bst_search_code_python = `
# Function to return the top from stack without removing it 
def peek(stack): 
    if (isEmpty(stack)): 
        return str(-maxsize -1) # return minus infinite 
    return stack[len(stack) - 1] 
`;

module.exports = {
  bst_insert_code_c,
  bst_insert_code_cpp,
  bst_insert_code_java,
  bst_insert_code_python,
  bst_remove_code_c,
  bst_remove_code_cpp,
  bst_remove_code_java,
  bst_remove_code_python,
  bst_search_code_c,
  bst_search_code_cpp,
  bst_search_code_java,
  bst_search_code_python
};