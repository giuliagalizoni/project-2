function Footer() {
  return (
    <div
      className="mt-5 px-3 py-3 bg-info d-flex justify-content-between"
      style={{ color: "#fff", height: "100px" }}
    >
      This app was developed at IronHack bootcamp FullStack Web Development.
      <div className="mx-3">
      {" "}Developed by:{" "}
        <a
          href="https://www.linkedin.com/in/giulia-galizoni-caversan-84b481112?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsziwYW%2BDSuOlbSTM77qwKA%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
           Giulia Galizoni
        </a>{" "}
        &{" "}
        <a
          href="https://www.linkedin.com/in/junior-vilarino?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2Qo%2FMX0eR5arhXZKxK5N8g%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
           Junior Vilarino
        </a>
      </div>
    </div>
  );
}
export default Footer;
