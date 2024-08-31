import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { changePin } from "../redux/slices/accountSlice";
import { toast } from "react-toastify";

const ChangePin = () => {
	const pin = useSelector((state) => state.account.pin);
	const dispatch = useDispatch();

	const handleInputPin = (e) => {
		e.preventDefault();
		e.target.value = e.target.value.replace(/[a-zA-Z]/g, "");
	};

	const handleChangePin = (e) => {
		e.preventDefault();

		const oldPin = e.target.old_pin.value;
		const newPin = e.target.new_pin.value;

		if (oldPin === "" || newPin === "") {
			toast.error("PIN anda tidak boleh kosong !", {
				autoClose: 2500,
			});
		} else if (oldPin === pin) {
			if (newPin === oldPin) {
				toast.error("PIN baru anda tidak boleh sama dengan PIN lama anda !", {
					autoClose: 2500,
				});
			} else {
				dispatch(changePin(newPin));
				toast.success("PIN anda berhasil diubah !", {
					autoClose: 2500,
				});

				e.target.reset();
			}
		} else {
			toast.error("PIN anda salah !", {
				autoClose: 2500,
			});
		}
	};

	return (
		<div className="container">
			<Navbar />
			<div className="main-page">
				<Sidebar />
				<div className="main-section">
					<h2 className="menu-title">Ubah PIN anda</h2>
					<form onSubmit={handleChangePin} className="form-changepin">
						<div className="input-group">
							<label htmlFor="old_pin">Masukkan PIN lama anda</label>
							<input type="password" id="old_pin" name="old_pin" className="form-control input-pin" maxLength={6} placeholder="Masukkan PIN lama anda" onChange={handleInputPin} autoComplete="off" />
						</div>
						<div className="input-group">
							<label htmlFor="new_pin">Masukkan PIN baru anda</label>
							<input type="password" id="new_pin" name="new_pin" className="form-control input-pin" maxLength={6} placeholder="Masukkan PIN baru anda" onChange={handleInputPin} autoComplete="off" />
						</div>
						<div className="btn-group">
							<button type="submit" className="btn-changepin">
								Ubah PIN
							</button>
						</div>
					</form>
					<h5 className="tips-title">Tips :</h5>
					<p className="tips-desc">
						- Gunakan PIN 6 digit
						<br />- Jangan menggunakan tanggal lahir anda
						<br />- Harap ubah PIN anda secara berkala
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChangePin;
