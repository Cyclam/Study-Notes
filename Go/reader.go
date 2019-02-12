package main

import (
	"io"
	"fmt"
	"strings"
)

// type Reader interface {
// 	Read(p []byte) (n int, err error)
// }

func ReadFrom(reader io.Reader, num int) ([]byte, error) {
	p := make([]byte, num) // 创建大小为num的字节切片
	fmt.Println(p)
	n, err := reader.Read(p)
	if n > 0 {
		// return p[:n], nil
		return p, nil
	}
	return p, err
}

func main () {
	// 从字符串读取
	str := strings.NewReader("我")
	fmt.Println(str)
	data, err := ReadFrom(str, 12)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("十进制%d", data)
}