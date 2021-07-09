### 树

#### 二叉树 
> 二叉树(binary tree) 每个结点最多只能有两棵子树，且有左右之分。二叉树是 n 个有限元素的集合，该集合或者为空、或者由一个称为根(root) 的元素及两个不相交的、被分别称为左子树和右子树的二叉树组成，是有序树。当集合为空时，称该二叉树为空二叉树。

二叉树的相关操作：
    
        - js 创建（写死）
        - 前（root -> left -> right）
        - 中（left -> root -> right）
        - 后（left -> right -> root）序遍历（递归）

##### 一：
```javascript
    // 二叉树创建 1：（写死）
    //                                           A 
    //                                         /   \
    //                                       B     C 
    //                                      / \    / \
    //                                     D   E  F   G
    // 前序遍历： A B D E C F G
    // 中序遍历： D B E A F C G
    // 后序遍历： D E B F G C A

    function TreeNode() {
        let node = function(val){
            this.data = val;
            this.left = null;
            this.right = null;
        }

        this.createTree = function() {
            let tree = new node('A');
            tree.left = new node('B');
            tree.right = new node('C');
            tree.left.left = new node('D')
            tree.left.right = new node('E')
            tree.right.left = new node('F')
            tree.right.right = new node('G')
            return tree
        }
    }

    // 创建一个写死二叉树
    let myTree = new TreeNode()
    console.log(myTree.createTree())

    // 前序遍历 递归
    function beforeOrder(root) {
        if(root == null) return;
        console.log(root.data);
        beforeOrder(root.left);
        beforeOrder(root.right)
    }
    console.log('前',beforeOrder(myTree.createTree()))   // A B D E C F G
    
    // 中序遍历 （递归)
    var res = []
    function inOrder(root) {
        if(root == null) return;
        inOrder(root.left);
        // console.log(root.data)
        res.push(root.data)
        inOrder(root.right)
    }
    inOrder(myTree.createTree())
    console.log('中序：',res) //  D B E A F C G

    // 后序遍历 （递归）
    function afterOrder(root) {
        if(root == null) return;
        afterOrder(root.left)
        afterOrder(root.right)
        console.log(root.data)
    }
    console.log('后序: ', afterOrder(myTree.createTree()))  //D E B F G C A
```

##### 二：（非递归）二叉树的创建，非递归前中后遍历
[二叉树创建](https://www.jianshu.com/p/ad1a9da1547a)

[二叉树非递归遍历](https://segmentfault.com/a/1190000011053277)
```javascript
// 非递归遍历，正常创建 二叉树

// 二叉树的创建
/**
 * 节点 node
 */

 function createNode(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
 }

 /**
  * 构造函数 createTree
  */

 function createTree() {
     this.root = null;
 }

 /**
  * 
  * @param {*} data 节点的值
  */

 createTree.prototype.insertNode = function(data) {
     var node = new createNode(data, null, null)
     if(this.root == null) {
         this.root = node
     } else {
         insert(this.root, node)    // 传入根节点 root， 和新节点。insert 中进行递归进行更换 root
     }
 }

 /**
  * 插入方法
  * @param {*} node 节点
  * @param {*} newNode 被插入的新节点
  */

 var insert = function(node, newNode) {
     // 判断新节点往哪边插入
    if(newNode.data < node.data) {
        if(node.left == null) {
            node.left = newNode     // 如果该节点左侧没有左侧子节点，则在该处插入新节点
        } else {
            // 如果有的话, 进行递归下一层
            insert(node.left, newNode)
        }
    } else {
        if(node.right == null) {
            node.right = newNode
        } else {
            insert(node.right, newNode)
        }
    }
 }

 function createBinaryTree(arr) {
     var bst = new createTree();
     for(let i = 0; i < arr.length; i++) {
         bst.insertNode(arr[i])
     }

     return bst.root
 }

 const myTree = createBinaryTree([10, 5, 12, 4, 7])

 console.log(myTree)
//                                           10 
//                                         /   \
//                                       5     12 
//                                      / \    
//                                     4   7  
                        

// 
// 前序遍历非递归

function preOrder(root) {
    // 利用栈的思想：先进后出
    var nodeList = [], res = []
    if(root) {
        nodeList.push(root)
    }

    while(nodeList.length) {
        var node = nodeList.pop()
        res.push(node.data)
        //由于栈先进后出，所以先从右边放入
        if(node.right) {
            nodeList.push(node.right)
        }
        if(node.left) {
            nodeList.push(node.left)
        }
    }
    return res
}
const preOrderRes =  preOrder(myTree)
console.log('前序：', preOrderRes);     // 10, 5, 4, 7, 12

// 中序遍历非递归
function inOrder(root) {
    var orderList = [], res = []
    while(true) {
        while(root) {   // 先将root左子树全放进 orderList，然后再输入
            orderList.push(root) 
            root = root.left
        }

        if(orderList.length == 0) { // 最终遍历完之后，跳出
            break;
        }

        var node = orderList.pop();
        res.push(node.data);
        root = node.right
    }
    return res
}
const inOrderRes = inOrder(myTree)
console.log('中序：' , inOrderRes); // 4, 5, 7, 10, 12

// 后序遍历
function afterOrder(root) {
    var nodeList = [], res = []
    if(root) {
        nodeList.push(root)
    }
    while(nodeList.length) {
        var node = nodeList.pop()
        if(node.left) {
            nodeList.push(node.left)
        }
        if(node.right) {
            nodeList.push(node.right)
        }
        res.push(node.data)
    }
    return res.reverse()
}
const afterOrderRes = afterOrder(myTree)
console.log('后序：', afterOrderRes);   // 4, 7, 5, 12, 10
```