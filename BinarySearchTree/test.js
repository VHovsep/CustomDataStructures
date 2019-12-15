const BinarySearchTree = require("binary-search-tree");
var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
//----------------------------------------------------------------------
var root = BST.getRootNode();

BST.inorder(root);

BST.remove(5);


//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17


var root = BST.getRootNode();

BST.inorder(root);

BST.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17


var root = BST.getRootNode();

BST.inorder(root);

BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

var root = BST.getRootNode();
console.log("inorder traversal");

BST.inorder(root);

console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
