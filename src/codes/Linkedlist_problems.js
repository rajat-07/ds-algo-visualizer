let linkedlist_problems = [];

const prob_00 = {
  tag: "easy",
  link: "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-virat/",
  title: `
    Find the middle of a given linked list.
    `,
  ques: `
    Given a singly linked list, find middle of the linked list. 
    For example, if given linked list is 1->2->3->4->5 then output should be 3.
    If there are even nodes, then there would be two middle nodes, we need to print second middle element. 
    For example, if given linked list is 1->2->3->4->5->6 then output should be 4.
    `,
  solution: `
void printMiddle(struct Node *head)  
{  
    struct Node *slow_ptr = head;  
    struct Node *fast_ptr = head;  

    if (head!=NULL)  
    {  
        while (fast_ptr != NULL && fast_ptr->next != NULL)  
        {  
            fast_ptr = fast_ptr->next->next;  
            slow_ptr = slow_ptr->next;  
        }  
        printf("The middle element is [%d]\n\n", slow_ptr->data);  
    }  
} 
    `,
  explanation: [
    {
      from: 0,
      to: 2,
      content: `
Initailizing 
`,
    },
    {
      from: 3,
      to: 5,
      content: `
Initailizing fast ptr and slow ptr to head
`,
    },
    {
      from: 8,
      to: 13,
      content: `
Running while loop
`,
      content: "Running while loop",
    },
    {
      from: 13,
      to: 14,
      content: `
Printing the data
`,
    },
  ],
};

const prob_01 = {
  tag: "easy",
  link: "https://www.hackerearth.com/practice/data-structures/trees/heapspriority-queues/practice-problems/algorithm/little-monk-and-williamson/",
  title: `
    Find the middle of a given linked list.
    `,
  ques: `
    Given a singly linked list, find middle of the linked list. 
    For example, if given linked list is 1->2->3->4->5 then output should be 3.
    If there are even nodes, then there would be two middle nodes, we need to print second middle element. 
    For example, if given linked list is 1->2->3->4->5->6 then output should be 4.
    `,
  solution: `
void printMiddle(struct Node *head)  
{  
    struct Node *slow_ptr = head;  
    struct Node *fast_ptr = head;  

    if (head!=NULL)  
    {  
        while (fast_ptr != NULL && fast_ptr->next != NULL)  
        {  
            fast_ptr = fast_ptr->next->next;  
            slow_ptr = slow_ptr->next;  
        }  
        printf("The middle element is [%d]\n\n", slow_ptr->data);  
    }  
} 
    `,
  explanation: [
    {
      id: "exp-3-5",
      from: 3,
      to: 5,
      content: "Initailizing fast ptr and slow ptr to head 2",
    },
    {
      id: "exp-3-5",
      from: 8,
      to: 13,
      content: "Running while loop 2",
    },
    {
      id: "exp-3-5",
      from: 13,
      to: 14,
      content: "Printiing the data 2",
    },
  ],
};

linkedlist_problems.push(prob_00);
linkedlist_problems.push(prob_01);

module.exports = { linkedlist_problems };
