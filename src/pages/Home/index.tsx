// pages/Home/index.tsx
import type { RootState } from "~/stores";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "~/stores/counter";

const Home = () => {
    const count = useSelector((state: RootState) => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <div>Home Page</div>
            <button onClick={() => dispatch(increment())}>
                increment counter: {count}
            </button>
            <button onClick={() => dispatch(incrementByAmount(10))}>
                increment counter 10: {count}
            </button>
        </div>
    );
};

export default Home;
