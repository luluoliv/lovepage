import { Link } from "react-router-dom";

function ButtonHome(props) {
    return (
        <button className="flex items-center justify-center w-2/3 rounded-2xl px-10 py-8 border-[#FDE3A8] border-2 hover:text-[#f5f5f5] hover:border-[#F5f5f5]">
            <Link to={props.to}>
                <i className={props.className}></i>
                <span>{props.name}</span>
            </Link>
        </button>
    );
}

export default ButtonHome;