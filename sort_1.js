/**
 * Created by songjianhua on 15-6-26.
 */
var nums = new Array();
function fn(n)
{
    for (var i = 0; i < n; ++i) {
        nums[i] = i;
    }
}
function compare(num1,num2)
{
   return num1 - num2;
}
fn(10);
nums.push(10,11);
nums.pop();
nums.shift();
nums.unshift(-1,-2);
nums.sort(compare);
var nums2 = nums.concat(33,44);
nums2.splice(0,0,"songjianhua","liyuchuang");
var nums3 = nums.slice(3,5);
nums3.splice(0,2);
console.log(nums2);
nums2.splice(0,2,"s","o","n","g");
console.log(nums2);
console.log("HelloWorld!");

/*function ListNode(data)
{
    this.data = data;
    this.next = null;
    return this;
}

function LinkedList()
{
    this.list_header = null;
}

LinkedList.create_list_from_array = function(array_data)
{
    //在这里写入代码
    var list = new LinkedList();
    for(var i=0; i<array_data.length; ++i)
    {
        var newNode=ListNode(array_data[i]);
        newNode.next=this.list_header;
        this.list_header=newNode;
    }
    return list;
};
LinkedList.prototype.insert_node_to_list_last = function(data)
{

    if (!this.list_header) {
        this.list_header = new ListNode(data);
    }
    else
    {
        var last_node = this.get_last_node();
        var new_node = new ListNode(data);
        last_node.next = new_node;
    }

    return this.list_header;
};

LinkedList.prototype.get_last_node = function()
{
    var last_node = this.list_header;
    while (last_node.next != null)
    {
        last_node = last_node.next;
    }
    return last_node;
};
var nums=[0,1,2,3,4,5];

var a_list=LinkedList.create_list_from_array(nums);
alert(a_list);
    */