#include<bits/stdc++.h>
using namespace std ;
class SegmentTree {
    vector<int>tree ; 
    vector<int>arr ; 
    int n ; 
    public : 
    SegmentTree(vector<int>input) { 
        n = input.size() ; 
        arr = input ; 
        tree.resize(4*n) ;
        build(0 , 0 , n-1) ;
    }

    void build(int node , int start , int end) {

        if(start == end) {
            tree[node ] = arr[start] ; 
            return ;
        }

        int mid = start + (end - start)/2 ;

        // left segment tree 
        build(2*node+1 , start , mid) ;
        // right segment tree
        build(2*node+2 , mid+1 , end) ;
        tree[node] = max(tree[2*node + 1],tree[2*node + 2]) ;

    }

    int range(int node , int start  , int end , int left , int right) {

        if(end < left || start > right) {
            return INT_MIN  ;
        }

        if(left <= start && end <= right) {
            return tree[node] ;
        }

        int mid = start + (end - start)/2 ; 

        return max(range(2*node+1, start , mid , left , right) ,range(2*node+2 , mid + 1 , end, left , right)) ;
    }

    int query(int left , int right) {
        return range(0 , 0 , n-1 , left , right) ;
    }

    void updating(int node, int start , int end, int index , int val) {
        if(index < start || index > end) {
            return  ;
        }
        if(start == end) {
            tree[node] = val ;
            return  ;
        }

        int mid = start + (end- start)/2 ;

        updating(2*node+1 , start , mid , index , val) ; 
        updating(2*node+2 , mid+1 , end , index , val) ;
        tree[node] = max(tree[2*node+2] , tree[2*node+2]) ;
    }

    void update(int index, int val) {
        return updating(0 , 0 , n-1 , index, val) ;
        // arr[index] = val ;
    }

};
int main() {

    vector<int>arr ;
    arr.push_back(3) ;
    arr.push_back(6) ;
    arr.push_back(4) ; 
    arr.push_back(25) ; 
    arr.push_back(5) ;  
    arr.push_back(13) ; 
    arr.push_back(18) ;

    SegmentTree *Tree = new SegmentTree(arr) ;
    Tree -> update(3 , 10) ;
    cout << Tree->query(1,5) << endl ;
    return 0 ;
} 