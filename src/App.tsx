import { SetStateAction, useEffect, useState } from "react";

// Task Description:
// This is a listing page of books.
// When the page is loaded, it fetches all books into a variable, called "books"
// Then user will do some searching, by typing some keywords or some tags
// The page will do the filtering locally and then store the result into a variable, called "shownItems"

// finish those "to do" parts
// p.s., you can add any other variables or functions you need

interface Book {
  id: string;
  name: string;
  tags: string[];
}

async function fetchAllBooks() {
  const list: Book[] = [
    {
      id: "1",
      name: "JavaScript入門指南",
      tags: ["前端開發", "JavaScript", "程式設計"],
    },
    { id: "2", name: "Python程式設計", tags: ["Python"] },
    {
      id: "3",
      name: "資料結構與演算法",
      tags: ["演算法", "資料結構", "程式設計"],
    },
    { id: "4", name: "人工智慧導論", tags: ["人工智慧", "機器學習"] },
    { id: "5", name: "文學經典選集", tags: ["文學"] },
    { id: "6", name: "歷史小說大全", tags: ["歷史", "小說"] },
    { id: "7", name: "實用廚藝手冊", tags: ["廚藝", "飲食"] },
    { id: "8", name: "心理學入門", tags: ["心理學"] },
    { id: "9", name: "數學傳奇故事", tags: ["數學", "故事"] },
    { id: "10", name: "科學實驗大全", tags: ["科學", "實驗"] },
    { id: "11", name: "藝術史概論", tags: ["藝術", "歷史"] },
    { id: "12", name: "健康飲食指南", tags: ["健康", "飲食"] },
    { id: "13", name: "音樂理論基礎", tags: ["音樂", "理論"] },
    { id: "14", name: "環境保護手冊", tags: ["環境", "保護"] },
    { id: "15", name: "旅行攝影技巧", tags: ["旅行", "攝影"] },
    { id: "16", name: "心靈成長之路", tags: ["心靈", "成長"] },
    { id: "17", name: "瑜伽入門指南", tags: ["瑜伽", "健康"] },
    { id: "18", name: "創意寫作手冊", tags: ["創意", "寫作"] },
    { id: "19", name: "太空探索歷險", tags: ["太空", "探索"] },
    { id: "20", name: "電影鑑賞指南", tags: ["電影", "藝術"] },
    { id: "21", name: "時尚穿搭秘笈", tags: ["時尚", "穿搭"] },
    { id: "22", name: "金融投資策略", tags: ["金融", "投資"] },
    { id: "23", name: "烹飪美食心法", tags: ["烹飪", "美食"] },
    { id: "24", name: "行銷策略百科", tags: ["行銷", "策略"] },
    { id: "25", name: "人類演化探索", tags: ["人類", "演化"] },
    { id: "26", name: "心理分析入門", tags: ["心理", "分析"] },
    { id: "27", name: "夢境解析指南", tags: ["夢境", "解析"] },
    { id: "28", name: "自然生態探索", tags: ["自然", "生態"] },
    { id: "29", name: "健身運動指南", tags: ["健身", "運動"] },
    { id: "30", name: "美術鑑賞入門", tags: ["美術", "鑑賞"] },
  ];
  return list;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [tagFilters, setTagFilters] = useState<string[]>([]);


  
  const [searchResult, setSearchResult] = useState<Book[]>([]);
  const [tagSearch, setTagSearch] = useState<string>("");

  const shownItems: Book[] = []; // to do

  useEffect(() => {
    (async () => {
      try {
        setBooks(await fetchAllBooks());
      } catch (error) {
        console.error("取得 fetchAllBooks() 內容時發生錯誤:", error);
      }
    })();


    /*
    async function getListContent() {
      try {
        const fetchList = await fetchAllBooks();
        
        const list = fetchList.filter((item)=>item);
        setBooks(list);
        
      } catch (error) {
        console.error('取得 list 內容時發生錯誤:', error);
      }
    }

    getListContent();
    */

    // (async () => {
    //   console.log(await fetchAllBooks())
    //   setBooks(await fetchAllBooks())
    //   await console.log(books)

    // })()
    //fetchData().then(()=>console.log(books));

    /*
    const allBooks = fetchAllBooks.filter((item) => {
      setBooks([...books], items)
    });
    */
  }, []); // to do

  useEffect(() => {
    const filteredBooks = books.filter(book =>
      book.name.toLowerCase().includes(keyword.toLowerCase()) &&
      (tagFilters.length === 0 || tagFilters.every(tag => book.tags.includes(tag)))
    );

    console.log(filteredBooks)
    
    // You can set the filtered books to another state variable if needed
    setSearchResult(filteredBooks);
    // console.log(shownItems);
  }, [books, keyword, tagFilters]);

  // ... no need to write the UI part

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-1/2 px-2">
              <h1 className="text-xl">All Book list</h1>
              <div className="overflow-x-auto">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th className="w-4">ID</th>
                      <th>Name</th>
                      <th>tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books?.map((item) => {
                      return (
                        <tr>
                          <td className="text-center">{item.id}</td>
                          <td className="w-1/4">{item.name}</td>
                          <td>
                            {item.tags?.map((tag) => {
                              return (
                                <div className="badge badge-primary badge-outline badge-sm me-2">
                                  {tag}
                                </div>
                              );
                            })}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-1/2 px-2">
              <h1 className="text-xl mb-2">Search Result</h1>
              <div className="join">
                <input type="text" placeholder="Keyword" className="input input-bordered w-full max-w-xs join-item" value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}/>
                <input type="text" placeholder="Tag Search" className="input input-bordered w-full max-w-xs join-item" value={tagSearch} onChange={(e)=>{setTagSearch(e.target.value);setTagFilters([e.target.value])}}/>
              </div>
              <hr className="my-4"/>
              <table className="table table-sm">
                  <thead>
                    <tr>
                      <th className="w-4">ID</th>
                      <th>Name</th>
                      <th>tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResult?.map((item) => {
                        return (
                          <tr>
                            <td className="text-center">{item.id}</td>
                            <td className="w-1/4">{item.name}</td>
                            <td>
                              {item.tags?.map((tag) => {
                                return (
                                  <div className="badge badge-primary badge-outline badge-sm me-2">
                                    {tag}
                                  </div>
                                );
                              })}
                            </td>
                          </tr>
                        );
                    })}

                  </tbody>
                </table>
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
