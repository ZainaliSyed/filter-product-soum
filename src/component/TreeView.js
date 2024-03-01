import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const TreeNode = ({ node, onSelectNode = () => {} }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    node?.selectedName && onSelectNode(node)
  };

  return (
    <View>
      <TouchableOpacity onPress={handleToggleExpand}>
        <Text style={{marginVertical: 10, fontSize: 16, fontWeight: 400, color: 'gray'}}>{node.name}</Text>
      </TouchableOpacity>
      {isExpanded && node.children && (
        <View style={{ marginLeft: 20 }}>
          {node.children.map((childNode) => (
            <TreeNode key={childNode.id} node={childNode} 
            onSelectNode={onSelectNode} 
            />
          ))}
        </View>
      )}
    </View>
  );
};

const TreeView = ({ data, onSelectNode }) => {
  return (
    <ScrollView style={{ paddingHorizontal: 20, height: '50%' }}>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} onSelectNode={onSelectNode} />
      ))}
    </ScrollView>
  );
};

export default TreeView;
