#include <iostream>
using namespace std;

void increment(int *ptr){
    *ptr+=1;
    cout<<*ptr<<endl;
}


int main(){
    int a = 10;
    increment(&a);
    cout << a<<endl;
}























