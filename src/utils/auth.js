/*
 * @Author: BORING GHOST
 * @Date: 2022-06-29 16:47:32
 * @LastEditTime: 2022-06-29 16:47:57
 * @Description:
 */
/**
 * 文件转base64
 */
export function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
