// Interface 定義對象擁有那些屬性
// 例子:
interface User {
    name: string;
    age: number;
  }

  function getUserInfo(user: User) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
  }

  getUserInfo({name: "John Doe", age: 30});

// Enum 變量只能從預先定義的幾個值裡選擇
enum Direction {
    Up,
    Down,
    Left,
    Right
  }

  function move(direction: Direction) {
    console.log(`Moving ${Direction[direction]}`);
  }

  // 正確使用
  move(Direction.Up);

  // 錯誤使用：'5' 不是 'Direction' 的有效值
  // move(5); // TypeScript 會報錯
