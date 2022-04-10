import { ArrowLeft } from "@carbon/icons-react";
import { Link } from "react-router-dom";

function BackBtn() {
  return (
    <Link className="btn btn-secondary me-5" to={`/`}>
      <ArrowLeft />
    </Link>
  );
}

export default BackBtn;
