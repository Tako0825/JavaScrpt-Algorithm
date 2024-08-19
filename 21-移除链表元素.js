function ListNode(val) {
    this.val = val
    this.next = null
}

function createLinkList(nums) {
    let head = new ListNode(nums[0], null)
    let pointer = head
    for(let i = 1; i < nums.length; i ++) {
        pointer.next = new ListNode(nums[i])
        pointer = pointer.next
    }
    return head
}

const listNode = createLinkList([1,2,6,3,4,5,6])

function removeListNode(listNode, target) {
    let pointer = new ListNode('666')
    let head = pointer
    let next = listNode
    while(next !== null) {
        if(next.val === target) {
            next = next.next
            pointer.next = next
        } else {
            pointer.next = next
            pointer = pointer.next
            next = next.next
        }
    }
    return head.next
}

const result = removeListNode(listNode, 6)
console.log(result)