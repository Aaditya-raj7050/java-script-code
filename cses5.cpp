#include<bits/stdc++.h>
using namespace std ;
int main() {

    int n , m ;
    cin >> n >> m ; 

    vector<vector<int>>edges(m,vector<int>(3)) ; 

    for(int i=0 ; i<m ; i++) {
        for(int j=0 ; j<3; j++) {
            cin >> edges[i][j] ;
        }
    }   

    vector<pair<int,int>>adj[n] ;

    for(int i=0 ; i<m ; i++) {
        int u = edges[i][0] - 1 ; 
        int v = edges[i][1] - 1 ; 
        int weight = edges[i][2] ; 
        adj[u].push_back({v , weight}) ; 
    }

    vector<int>dist(n , INT_MAX) ; 

    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>>pq ;
    
    pq.push({0,0}) ;
    dist[0] = 0 ;
    while(!pq.empty()) {
        int step = pq.top().first ;
        int node = pq.top().second ; 

        pq.pop() ;


        for(int i=0 ; i<adj[node].size() ; i++) {
            int neigh = adj[node][i].first ; 
            int weight = adj[node][i].second ; 

            if(dist[node] + weight < dist[neigh]) {
                dist[neigh] = dist[node] + weight ;
                pq.push({dist[neigh] , neigh}) ;
            } 
        }
    }

        for(int i=0 ; i<n ; i++) {
            cout << dist[i] << " " ;
        }



    return 0 ;
}