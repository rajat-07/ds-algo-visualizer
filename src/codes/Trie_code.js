// push code
const trie_insert_code_c = `
// Function to add an item to stack.  It increases top by 1 
void push(struct Stack* stack, int item) 
{ 
    if (isFull(stack)) 
        return; 
    stack->array[++stack->top] = item; 
    printf("%d pushed to stack\n", item); 
} 
`;
const trie_insert_code_cpp = `
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
const trie_insert_code_java = `
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
const trie_insert_code_python = `
# Function to add an item to stack. It increases size by 1 
def push(stack, item): 
    stack.append(item) 
    print(item + " pushed to stack ") 
`;

// peek code
const trie_search_code_c = `
// Function to return the top from stack without removing it 
int peek(struct Stack* stack) 
{ 
    if (isEmpty(stack)) 
        return INT_MIN; 
    return stack->array[stack->top]; 
} 
`;
const trie_search_code_cpp = `
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
const trie_search_code_java = `
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
const trie_search_code_python = `
# Function to return the top from stack without removing it 
def peek(stack): 
    if (isEmpty(stack)): 
        return str(-maxsize -1) # return minus infinite 
    return stack[len(stack) - 1] 
`;

module.exports = {
  trie_insert_code_c,
  trie_insert_code_cpp,
  trie_insert_code_java,
  trie_insert_code_python,
  trie_search_code_c,
  trie_search_code_cpp,
  trie_search_code_java,
  trie_search_code_python
};