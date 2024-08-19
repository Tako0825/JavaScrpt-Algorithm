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

const listNode = createLinkList([1, 2, 3, 4, 5])

function reverseLinkList(listNode) {
    let prev = null
    let pointer = listNode
    while(pointer !== null) {
        let next = pointer.next
        pointer.next = prev
        prev = pointer
        pointer = next
    }
    return prev
}

const result = reverseLinkList(listNode)
console.log(result)