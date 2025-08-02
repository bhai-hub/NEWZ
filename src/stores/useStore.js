import { create } from "zustand";

const useNewsStore= create((set)=>({
    articles: [],
    loading: true,
    setArticles: (data) => set({articles: data}),
    setLoading: (value) => set({loading: value}),
    keywordState: '',
    setKeywordState: (value) => set({keywordState: value})
}))

export default useNewsStore;