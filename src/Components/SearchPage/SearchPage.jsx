import { useDispatch, useSelector } from "react-redux";
import Goods from "../Goods/Goods";
import s from './SearchPage.module.scss'
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchAll } from "../../features/genderSlice";

const SearchPage = () => {
    const { goodsList } = useSelector(state => state.goods);

    const dispatch = useDispatch();


    let [searchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get('q');

        const params = { search }

        dispatch(fetchAll(params))
    }, [searchParams, dispatch])


    return goodsList.length ? (
        <Goods title="Избранное" />
    ) : (
        <h3 className={s.empty}>Ничего не найдено по вашему запросу</h3>
    );
}



export default SearchPage;