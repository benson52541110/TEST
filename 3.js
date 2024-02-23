    function getUniqueNumber(items) {
        // 使用Set對象去除重複
        const uniqueItems = new Set(items);

        uniqueItems.forEach((item) => console.log(item));
    }
