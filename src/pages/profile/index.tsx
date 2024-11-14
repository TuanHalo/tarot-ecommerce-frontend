import "./index.scss";

const Profile = () => {
  return (
    <div className="p-profile">
      <h2 className="p-profile_title">Hồ sơ của tôi</h2>
      <div className="p-profile_content">
        <div className="p-profile_content--left"></div>
        <div className="p-profile_content--right">
          <img src="/images/Avatar.jpg" alt="" className="right_img" />
          <label htmlFor="file-upload" className="right_btn">
            Chọn ảnh
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          <></>
          <p className="right_note">
            Dung lượng file tối đa 1MB <br /> Định dạng: .JPEG, .PNG
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
