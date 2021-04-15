// edges are a reference to a node

function Node  (oVal, oLeft, oRight ) {
    this.val = oVal;
    this.left = oLeft;
    this.right = oRight;
}


var BST = {
    root: undefined,
    insert: function(iValue) {
        if(this.root === undefined) {
            this.root = new Node(iValue)
            return true;
        } else {
            var oNodeBefore = undefined;
            var oCurrentNode = this.root;
            while(oCurrentNode !== undefined) {
                oNodeBefore = oCurrentNode;
                if(oCurrentNode.val < iValue) {
                    oCurrentNode = oCurrentNode.right
                } else if(oCurrentNode.val > iValue) {
                    oCurrentNode = oCurrentNode.left
                } else {
                    // Don't want to insert duplicate
                    return false
                }
            }

            if(oNodeBefore.val < iValue) {
                oNodeBefore.right = new Node(iValue)
            } else {
                oNodeBefore.left = new Node(iValue)
            } 
            return true
        }
    },

    search: function(iValue) {
        var oCurrentNode = this.root;
        while(oCurrentNode !== undefined) {
            if(oCurrentNode.val < iValue) {
                oCurrentNode = oCurrentNode.right
            } else if(oCurrentNode.val > iValue) {
                oCurrentNode = oCurrentNode.left
            } else {
                return true
            }
        }

        // Value isn't in the tree
        return false
    }
}

var aInput = []
for(var i = 0; i <100; i++) {
    aInput[i] = Math.round(Math.random() * 100); 
    BST.insert(aInput[i])
}

for(var i = 0; i , 100; i++) {
    if(!BST.search(aInput[i])) {
        console.log("Not found")
    }
}

console.log("END")