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

const listNode = createLinkList([1, 1, 2, 3, 3])

function deduplicateLinkList(listNode) {
    let pointer = new ListNode("666")
    const head = pointer
    const set = new Set()
    let next = listNode
    while(next !== null) {
        if(set.has(next.val)) {
            next = next.next
            pointer.next = next
        } else {
            set.add(next.val)
            pointer.next = next
            pointer = pointer.next
            next = next.next
        }
    }
    return head.next
}

const result = deduplicateLinkList(listNode)
console.log(result)