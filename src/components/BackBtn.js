import { ArrowLeft } from "@carbon/icons-react";
import { useNavigate } from "react-router-dom";

function BackBtn() {
  const navigate = useNavigate();

  return (
    <div className="btn btn-secondary me-5" onClick={() => navigate(-1)}>
      <ArrowLeft />
    </div>
  );
}

export default BackBtn;
