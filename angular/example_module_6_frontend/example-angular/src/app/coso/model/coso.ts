import {NhanVien} from './nhan-vien';

export interface Coso {
  id?: number;
  maCoSo?: string;
  tenCoSo?: string;
  ngayKhaiTruong?: string;
  diaChi?: string;
  nhanVien?: NhanVien;
}
