/**
 * Created by freshwinds on 17-7-12.
 */
function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}

function Item(barcode,name,unit,count,price){
    this.barcode=barcode;
    this.name=name;
    this.unit=unit;
    this.count=count;
    this.price=price;
    this.getBarcode=function () {
        return this.barcode;
    }

}
function get_Items(items_information){
    var items=new Array();
    for(var i=0;i<items_information.length;i++)
    {
        items[i]=new Item(items_information[i].barcode,items_information[i].name,items_information[i].unit,0,items_information[i].price);
    }
    return items;
}
function cal_itemsum(inputs,items) {
    for(var i=0;i<inputs.length;i++) {
        for (var j = 0; j < items.length; j++) {
            if (inputs[i] == items[j].barcode) {
                items[j].count++;
            }
        }
    }
}

function cal_sum(items){
    var all_sum=0;
    for(var i=0;i<items.length;i++)
        all_sum+=items[i].price*items[i].count;
    return all_sum;
}

function items_list(items,all_sum) {
    var str="";
    str+="***<没钱赚商店>收据***\n";
    for(var i=0;i<items.length;i++)
    {
        if(items[i].count!=0) {
            str += "名称：";
            str += String(items[i].name);
            str += ",数量：";
            str += String(items[i].count);
            str += String(items[i].unit);
            str += ",单价：";
            str += String(items[i].price.toFixed(2));
            str += "(元),小计：";
            str += String((items[i].count*items[i].price).toFixed(2) + "(元)\n");
         }
    }
    str+="----------------------\n总计：";

    str+=String(all_sum.toFixed(2)+"(元)\n");
    str+="**********************";
    return str;
}
var items_information=loadAllItems();
var items=get_Items(items_information);
var inputs = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
];
cal_itemsum(inputs,items);
var all_sum=cal_sum(items);
console.log(items_list(items,all_sum));
