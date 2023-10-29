// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
//ให้แก้ไขจำนวนสินค้า Apple จาก 100 เป็น 200
inventory.apple.quantity = 200;

//เพิ่มสินค้าใหม่ที่ชื่อ "orange" ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.orange = { price: 20, quantity: 300 };

//คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วย Loop
let totalValue = 0;
for (const fruit in inventory) {
  totalValue = totalValue + inventory[fruit].price * inventory[fruit].quantity;
}


//Log มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
console.log(`Total inventory value: ${totalValue} baht`);
