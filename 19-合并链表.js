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

const listNodeA = createLinkList([1, 2, 4])
const listNodeB = createLinkList([1, 3, 4])

function mergeLinkList(listNodeA, listNodeB) {
    let pointer = new ListNode('666')
    let head = pointer
    let nextA = listNodeA
    let nextB = listNodeB
    while(nextA !== null || nextB !== null) {
        if(nextA === null) {
            pointer.next = nextB
            pointer = nextB
            nextB = nextB.next
            continue
        } else if(nextB === null) {
            pointer.next = nextA
            pointer = nextA
            nextA = nextA.next
            continue
        }
        if(nextA.val < nextB.val) {
            pointer.next = nextA
            pointer = pointer.next
            nextA = nextA.next
        } else {
            pointer.next = nextB
            pointer = pointer.next
            nextB = nextB.next
        }
    }
    return head.next
}

const result = mergeLinkList(listNodeA, listNodeB)
console.log(result)