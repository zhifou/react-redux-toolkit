// pages/About/index.tsx
import type { RootState } from "~/stores";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "~/stores/counter";

const About = () => {
    const count = useSelector((state: RootState) => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <div>Home Page</div>
            <button onClick={() => dispatch(decrement())}>
                decrement counter: {count}
            </button>
        </div>
    );
};

export default About;
