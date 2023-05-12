const PracticeTry = () => {
  // try {
  //   const result = 5 / 'eeee';
  //   throw new Error('Помилка!');
  //   console.log(result);
  // } catch (error) {
  //   console.log(error.message);
  //   console.error(error);
  //   console.log('Помилка!!!!');
  // }

  let obj = { name: 'Alex', age: 34, email: 'gpt@gmail.com' };
  // for (const key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     console.log(key, obj[key]);
  //   }
  // }
  Object.values(obj).forEach((value) => {
    console.log(value);
  });

  // Object.keys(obj).forEach((key) => {
  //   console.log(key, obj[key]);
  // });

  return (
    <div>
      <h1>Hee</h1>
    </div>
  );
};

export default PracticeTry;
